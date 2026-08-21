import React from 'react'
import { Link } from 'react-router-dom'
import { HeartPulse, Home, ArrowLeft } from 'lucide-react'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-3xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-md">
        <HeartPulse className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-black text-slate-900 tracking-tight">404</h1>
      <h2 className="text-xl font-bold text-slate-800 mt-2">Page Not Found</h2>
      <p className="text-slate-500 text-sm max-w-sm mt-2">
        The medical portal page or resource you are looking for doesn't exist or has moved.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          to="/"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md shadow-blue-600/20 transition"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold flex items-center gap-2 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
