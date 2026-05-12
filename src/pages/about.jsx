import { Heart, Sparkles, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <img 
              src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=1200" 
              alt="Our Space" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 card p-6 max-w-xs z-20 hidden md:block">
              <p className="italic text-primary-dark/80">"Yoga is not about touching your toes, it is about what you learn on the way down."</p>
            </div>
          </div>
          
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary-dark mb-6">Harmonizing the World, One Breath at a Time</h2>
            <p className="text-primary-dark/70 mb-6 leading-relaxed">
              Founded in 2020, YogaYuk began with a simple vision: to make high-quality, authentic yoga accessible to everyone, everywhere. We believe that mindfulness shouldn't be a luxury, but a fundamental part of modern life.
            </p>
            <p className="text-primary-dark/70 mb-8 leading-relaxed">
              Our community has grown from a small group of enthusiasts to a global network of practitioners, all united by the desire for inner peace and physical wellness.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-primary mb-2">10k+</h4>
                <p className="text-xs uppercase font-bold tracking-wider text-primary-dark/40">Active Students</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary mb-2">50+</h4>
                <p className="text-xs uppercase font-bold tracking-wider text-primary-dark/40">Expert Teachers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-primary-light/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-primary-dark mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Heart size={32} />, title: "Compassion", desc: "We practice kindness toward ourselves and others." },
              { icon: <Sparkles size={32} />, title: "Authenticity", desc: "Rooted in traditional practices with modern relevance." },
              { icon: <Users size={32} />, title: "Community", desc: "Building a supportive space for growth and connection." },
              { icon: <Award size={32} />, title: "Excellence", desc: "Committed to the highest quality of instruction." },
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif text-primary-dark">{value.title}</h3>
                <p className="text-sm text-primary-dark/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl text-left">
              <h2 className="text-4xl font-serif text-primary-dark mb-4">Meet Our Lead Instructors</h2>
              <p className="text-primary-dark/60">Guided by experience, driven by passion.</p>
            </div>
            <button className="btn-outline">View All Teachers</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Zen", role: "Vinyasa Specialist", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" },
              { name: "Michael Flow", role: "Hatha Master", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800" },
              { name: "Elena Peace", role: "Meditation Guru", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl h-96">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-serif text-white mb-1">{member.name}</h4>
                  <p className="text-white/70 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
