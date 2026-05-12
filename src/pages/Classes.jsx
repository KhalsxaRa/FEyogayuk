import { Search, Filter, Clock, Star } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Classes = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleBookClass = (classTitle) => {
    if (!user) {
      // If user is not logged in, redirect to signup
      navigate('/signup');
    } else {
      // If logged in, handle the booking (e.g., show success or call API)
      alert(`Successfully booked: ${classTitle}`);
    }
  };

  const classes = [
    {
      title: "Morning Vinyasa Flow",
      instructor: "Sarah Zen",
      level: "All Levels",
      duration: "60 min",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=800",
      tag: "Energizing"
    },
    {
      title: "Deep Hatha Yoga",
      instructor: "Michael Flow",
      level: "Intermediate",
      duration: "75 min",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=800",
      tag: "Strength"
    },
    {
      title: "Mindful Meditation",
      instructor: "Elena Peace",
      level: "Beginner",
      duration: "30 min",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
      tag: "Mental Health"
    },
    {
      title: "Restorative Yin",
      instructor: "David Calm",
      level: "All Levels",
      duration: "90 min",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      tag: "Relaxation"
    },
    {
      title: "Power Yoga Core",
      instructor: "Jessica Burn",
      level: "Advanced",
      duration: "45 min",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800",
      tag: "Fitness"
    },
    {
      title: "Yoga for Athletes",
      instructor: "Tom Flex",
      level: "Intermediate",
      duration: "60 min",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800",
      tag: "Flexibility"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-primary-dark mb-4">Discover Your Practice</h1>
        <p className="text-primary-dark/60 max-w-2xl mx-auto">
          Choose from a variety of styles and instructors to find the perfect flow for your needs.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-dark/40" size={20} />
          <input 
            type="text" 
            placeholder="Search classes, instructors..." 
            className="input-field pl-12"
          />
        </div>
        <button className="btn-outline flex items-center justify-center gap-2 px-8">
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {classes.map((item, i) => (
          <div key={i} className="group card p-0 overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                  {item.tag}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-serif text-primary-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-primary-dark/60">with {item.instructor}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-1 rounded-lg">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold">{item.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-primary-dark/50 mb-6">
                <span className="flex items-center gap-1"><Clock size={14} /> {item.duration}</span>
                <span className="w-1 h-1 bg-primary-light rounded-full" />
                <span>{item.level}</span>
              </div>

              <button 
                type="button"
                onClick={() => handleBookClass(item.title)}
                className="btn-primary w-full"
              >
                Book this class
              </button>
            

            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
