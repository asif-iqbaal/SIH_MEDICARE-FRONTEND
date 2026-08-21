import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HeartPulse,
  Calendar,
  Clock,
  Search,
  PhoneCall,
  Video,
  UserCheck,
  Stethoscope,
  Activity,
  ArrowRight,
  Star,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  MapPin,
  Pill,
  Microscope,
  Menu,
  X
} from 'lucide-react'

export const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties')

  const specialties = [
    'All Specialties',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'General Medicine'
  ]

  const doctors = [
    {
      name: 'Dr. Sarah Jenkins',
      specialty: 'Cardiologist',
      experience: '12+ yrs exp',
      rating: '4.9',
      reviews: '340+',
      hospital: 'Metro Heart Institute',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurology Specialist',
      experience: '15+ yrs exp',
      rating: '4.8',
      reviews: '280+',
      hospital: 'Apex Neuro Hospital',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatric Care',
      experience: '9+ yrs exp',
      rating: '5.0',
      reviews: '410+',
      hospital: 'Children Care Center',
      avatar: 'https://images.unsplash.com/photo-1594824813589-9a74426d03d3?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Dr. Rajesh Patel',
      specialty: 'Orthopedic Surgeon',
      experience: '14+ yrs exp',
      rating: '4.9',
      reviews: '320+',
      hospital: 'City Ortho Clinic',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300'
    }
  ]

  const services = [
    {
      icon: <Video className="w-6 h-6 text-blue-600" />,
      title: 'Instant Video Consult',
      desc: 'Connect with verified top doctors within 15 minutes from the comfort of your home.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
      title: 'Doctor Appointment',
      desc: 'Book in-clinic visits without long queues and get priority assistance.'
    },
    {
      icon: <Pill className="w-6 h-6 text-purple-600" />,
      title: '24/7 Pharmacy',
      desc: 'Order prescribed medicines with rapid doorstep delivery and flat discounts.'
    },
    {
      icon: <Microscope className="w-6 h-6 text-amber-600" />,
      title: 'Diagnostic & Lab Tests',
      desc: 'Book home sample collection with accurate, certified digital reports.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>24/7 Emergency Medical Helpline Active</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:1800123456" className="flex items-center gap-1.5 font-semibold hover:text-blue-200 transition">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: 1800-MEDICARE</span>
            </a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <span className="hidden sm:inline text-slate-300">NABH & HIPAA Certified</span>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <HeartPulse className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-slate-900">
                  Medi<span className="text-blue-600">Care</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Healthcare System
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <a href="#features" className="hover:text-blue-600 transition">Features</a>
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
              <a href="#doctors" className="hover:text-blue-600 transition">Top Specialists</a>
              <a href="#how-it-works" className="hover:text-blue-600 transition">How it Works</a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-md shadow-blue-600/25 transition-all flex items-center gap-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Top Specialists
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              How it Works
            </a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/login"
                className="w-full text-center py-2.5 rounded-lg font-semibold text-slate-700 bg-slate-100"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="w-full text-center py-2.5 rounded-lg font-semibold text-white bg-blue-600 shadow-md shadow-blue-600/20"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Decorative background glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Next-Gen Healthcare Management & Telehealth</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Your Health, Our Priority. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Smart Care in Real-Time.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Connect with board-certified physicians, schedule video appointments, manage medical records, and receive prescribed doorstep care 24/7 with zero hassle.
              </p>

              {/* Doctor Search Widget */}
              <div className="p-3 bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200 max-w-2xl mx-auto lg:mx-0">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-5 relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Doctor, hospital, or symptom..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div className="sm:col-span-4">
                    <select
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl text-sm border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      {specialties.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-3">
                    <Link
                      to="/register"
                      className="w-full h-full min-h-[42px] px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
                    >
                      <span>Find Doctor</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>500+ Verified Doctors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>HIPAA Compliant Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero Wait Telehealth</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                    alt="Doctor Consultation"
                    className="w-full h-80 sm:h-96 object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 w-fit mb-2">
                      <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Doctor Available
                    </div>
                    <h3 className="text-xl font-bold">Comprehensive Care at Hand</h3>
                    <p className="text-xs text-slate-300 mt-1">Instant digital prescription & electronic lab reports on all visits.</p>
                  </div>
                </div>

                {/* Floating Doctor Profile Pill */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-bold text-slate-900">4.9 / 5.0</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800">100k+ Happy Patients</p>
                    <p className="text-[10px] text-slate-500">Across 45+ Specialties</p>
                  </div>
                </div>

                {/* Floating Emergency Badge */}
                <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-80">Avg Response</p>
                    <p className="text-xs font-bold">&lt; 15 Minutes</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Our Medical Services</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Complete Healthcare Suite
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From instant virtual consults to rapid ambulance dispatch, everything you need for optimal health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                  {srv.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600 mb-4">{srv.desc}</p>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-700"
                >
                  <span>Explore Service</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section id="doctors" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Certified Specialists</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Consult With Top Doctors
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Experienced practitioners from top accredited hospitals and clinics.
              </p>
            </div>
            <Link
              to="/register"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View All 500+ Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={doc.avatar}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-[11px] font-bold text-slate-800 flex items-center gap-1 shadow-xs">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>{doc.rating}</span>
                    <span className="text-slate-400 font-normal">({doc.reviews})</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{doc.name}</h3>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">{doc.specialty}</p>
                    <div className="mt-3 space-y-1 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{doc.hospital}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{doc.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link
                      to="/register"
                      className="w-full py-2 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors duration-200"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Simple & Seamless</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              How MediCare Works
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Book a consultation in 3 easy steps from any phone or computer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center relative">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-blue-500/20">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Search Specialist</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filter by symptoms, department, language, or ratings to find the right verified doctor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center relative">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-indigo-500/20">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Schedule Time Slot</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select between instant video call or in-person clinic visit with flexible timings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center relative">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-emerald-500/20">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Care & Prescription</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive digital medical records, e-prescriptions, and continuous follow-up guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm">
            Join thousands of patients who trust MediCare for fast, reliable, and compassionate healthcare.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl shadow-lg transition text-sm flex items-center gap-2"
            >
              <span>Create Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-blue-800/60 hover:bg-blue-800 text-white border border-blue-400/40 font-bold rounded-xl transition text-sm"
            >
              Sign In to Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs pt-12 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
                <HeartPulse className="w-6 h-6 text-blue-500" />
                <span className="text-lg font-bold">MediCare</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Smart, connected healthcare platform offering instant telemedicine, doctor booking, and medical management.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-3">Quick Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#doctors" className="hover:text-white transition">Find Doctors</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-3">Patient Portal</h4>
              <ul className="space-y-2">
                <li><Link to="/login" className="hover:text-white transition">Patient Login</Link></li>
                <li><Link to="/register" className="hover:text-white transition">Register Account</Link></li>
                <li><Link to="/register" className="hover:text-white transition">Doctor Partner Onboarding</Link></li>
                <li><a href="tel:1800123456" className="hover:text-white transition">Emergency Hotline</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-3">Emergency Contact</h4>
              <p className="text-slate-400 mb-2">Available 24/7 for urgent clinical support</p>
              <p className="text-white font-bold text-base">1800-MEDICARE</p>
              <p className="text-slate-400 text-[11px] mt-1">support@medicare-health.com</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px]">
            <p>&copy; {new Date().getFullYear()} MediCare Health Technologies. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
