
const successFullyPaid = () => {
  return (
        <div className="bg-white inline-flex space-x-3 p-3 text-sm rounded border border-gray-200">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 8.31V9a7.5 7.5 0 1 1-4.447-6.855M16.5 3 9 10.508l-2.25-2.25" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
                <h3 className="text-slate-700 font-medium">Successfully saved!</h3>
                <p className="text-slate-500">Anyone with a link can now view this file.</p>
            </div>
            <button type="button" aria-label="close" className="cursor-pointer mb-auto text-slate-400 hover:text-slate-600 active:scale-95 transition">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="12.532" width="17.498" height="2.1" rx="1.05" transform="rotate(-45.74 0 12.532)" fill="currentColor" fillOpacity=".7"/>
                    <rect x="12.531" y="13.914" width="17.498" height="2.1" rx="1.05" transform="rotate(-135.74 12.531 13.914)" fill="currentColor" fillOpacity=".7"/>
                </svg>
            </button>
        </div>



  )
}

export default successFullyPaid