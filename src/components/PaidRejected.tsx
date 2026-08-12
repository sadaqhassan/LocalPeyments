
const PaidRejected = () => {
  return (
        <div className="flex items-center justify-between text-red-600 max-w-80 w-full bg-red-600/10 h-10 shadow">
            <div className="h-full w-1.5 bg-red-600"></div>
            <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line">
                </svg>
                <p className="text-sm ml-2">Oops! Something went terribly wrong.</p>
            </div>
            <button type="button" aria-label="close" className="active:scale-90 transition-all mr-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
  )
}

export default PaidRejected