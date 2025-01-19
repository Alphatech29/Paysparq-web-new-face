import React, { useEffect, useState } from "react";
import { Avatar } from "flowbite-react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import supabase from "../../superBase/supabaseClient";

function Header() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
  
        if (error || !user) return console.error("Error fetching user.");
  
        const { data, error: balanceError } = await supabase
          .from("users")
          .select("balance")
          .eq("id", user.id)
          .single();
  
        if (balanceError) return console.error("Error fetching balance:", balanceError.message);
  
        setBalance(data.balance || 0);
        localStorage.setItem("user_balance", data.balance);
      } catch (error) {
        console.error("Error in fetchBalance:", error);
      }
    };
  
    fetchBalance();
  }, []);
  
  useEffect(() => {
    
    const subscribeToBalanceUpdates = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
  
      if (error || !user) return console.error("Error fetching user for subscription.");
  
      const channel = supabase
        .channel('balance-channel')
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'users' }, (payload) => {
          if (payload.new.id === user.id) {
            const updatedBalance = payload.new.balance;
            setBalance(updatedBalance);
            localStorage.setItem("user_balance", updatedBalance);
          }
        })
        .subscribe();
  
      return () => supabase.removeChannel(channel);
    };

    
  
    return subscribeToBalanceUpdates();
  }, []);
  

  return (
    <div className="w-[81.5%] h-auto bg-pay px-5 py-1 flex items-center justify-between border-b shadow border-b-primary-600 fixed top-0 right-0 z-10">
      <div className="flex items-center justify-center gap-3"></div>
      <div className="flex items-center justify-center gap-5">
        <span className="p-2 bg-primary-600 text-pay text-sm rounded-lg font-interSB">
          ${balance.toLocaleString()}
        </span>
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
          alt="Profile Picture"
        />
        <div className="flex items-center gap-2">
          <NotificationsIcon />
          <span className="text-red-600">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
