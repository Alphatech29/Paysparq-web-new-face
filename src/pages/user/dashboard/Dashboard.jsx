import React, { useEffect, useState } from 'react';
import supabase from '../../../../superBase/supabaseClient';
import Header from '../../../../components/dashboard/Header';
import SideBar from '../../../../components/dashboard/SideBar';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      const { data: user } = await supabase.auth.getUser(); // Updated to getUser()

      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('name')
          .eq('id', user.id)
          .single();
        
        if (data) {
          setUserName(data.name);
        } else {
          console.error('Error fetching user name:', error);
        }
      }
      setLoading(false);
    };

    fetchUserName();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen">
        <SideBar />
        <div className="flex flex-col w-full ml-64">
          <Header />
          <div className="bg-pay w-full mt-12 py-4 px-4 min-h-screen">
            <div>Loading...</div> {/* Display a loading message */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-col w-full ml-64">
        <Header />
        <div className="bg-pay w-full mt-12 py-4 px-4 min-h-screen">
          <div>
            <div>
              <h2 className="text-xl font-interSB text-secondary">
                Welcome Back! <span>{userName}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
