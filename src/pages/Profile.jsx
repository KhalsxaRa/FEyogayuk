import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { User, Mail, Phone, Calendar, ShieldCheck, MapPin, Edit2, Trash2, Save, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { updateUser, deleteAccount } from '../store/authSlice';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      nama: user?.nama,
      email: user?.email,
      telepon: user?.telepon
    }
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleUpdate = (data) => {
    dispatch(updateUser({ id: user.id_pengguna, data }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      dispatch(deleteAccount(user.id_pengguna));
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-500">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card text-center p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 flex gap-2">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              >
                {isEditing ? <X size={18} /> : <Edit2 size={18} />}
              </button>
              <button 
                onClick={handleDelete}
                className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                title="Delete Account"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="w-32 h-32 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
              <User size={64} />
            </div>
            
            {isEditing ? (
              <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
                <input {...register('nama')} className="input-field text-center text-lg" placeholder="Nama" />
                <div className="flex gap-2">
                  <button type="submit" className="btn-primary flex-1 py-2 text-xs flex items-center justify-center gap-2">
                    <Save size={14} /> Save
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="btn-outline flex-1 py-2 text-xs">
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h2 className="text-2xl font-serif text-primary-dark mb-1">{user.nama}</h2>
                <p className="text-primary-dark/60 text-sm mb-6 flex items-center justify-center gap-2">
                  <ShieldCheck size={14} /> Certified Member
                </p>
              </>
            )}
            
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">Pro</span>
              <span className="px-3 py-1 bg-green-100 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-full">Active</span>
            </div>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-sm font-bold text-primary-dark/40 uppercase tracking-widest">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary-dark/70">
                <div className="w-8 h-8 bg-bg-soft rounded-lg flex items-center justify-center"><Mail size={16} /></div>
                <div className="text-sm">
                  {isEditing ? (
                    <input {...register('email')} className="input-field py-1 text-xs" />
                  ) : (
                    <p className="font-medium text-primary-dark">{user.email}</p>
                  )}
                  <p className="text-[10px]">Email</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-primary-dark/70">
                <div className="w-8 h-8 bg-bg-soft rounded-lg flex items-center justify-center"><Phone size={16} /></div>
                <div className="text-sm">
                  {isEditing ? (
                    <input {...register('telepon')} className="input-field py-1 text-xs" />
                  ) : (
                    <p className="font-medium text-primary-dark">{user.telepon}</p>
                  )}
                  <p className="text-[10px]">Phone</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-primary-dark/70">
                <div className="w-8 h-8 bg-bg-soft rounded-lg flex items-center justify-center"><MapPin size={16} /></div>
                <div className="text-sm">
                  <p className="font-medium text-primary-dark">Jakarta, Indonesia</p>
                  <p className="text-[10px]">Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="card p-8">
            <h2 className="text-3xl font-serif text-primary-dark mb-6">User Statistics</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: 'Classes Attended', value: '24' },
                { label: 'Hours Practiced', value: '120' },
                { label: 'Yoga Points', value: '450' },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-primary-light/10 rounded-2xl text-center">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-xs text-primary-dark/60 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif text-primary-dark">Recent Activity</h2>
              <button className="text-sm font-bold text-primary hover:underline">View All</button>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Morning Vinyasa Flow', date: 'May 10, 2026', time: '07:30 AM' },
                { title: 'Meditation & Breathwork', date: 'May 08, 2026', time: '06:00 PM' },
                { title: 'Deep Tissue Hatha', date: 'May 05, 2026', time: '08:15 AM' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-primary-light/20 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white border border-primary-light rounded-xl flex items-center justify-center text-primary">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-primary-dark">{activity.title}</p>
                      <p className="text-xs text-primary-dark/50">{activity.date}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary-dark/40">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
