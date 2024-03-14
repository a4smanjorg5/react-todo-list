const colorVariants = {
  slate: 'bg-slate-600 hover:bg-slate-700 disabled:bg-slate-300',
  indigo: 'bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300',
  emerald: 'bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300',
  rose: 'bg-rose-600 hover:bg-rose-700 disabled:bg-rose-300',
}

const Button = ({ variant = 'slate', processing, handleClick, children }) =>
  <button
    className={`${colorVariants[variant]} py-2 px-4 rounded text-white`}
    disabled={processing}
    onClick={handleClick}
    type={handleClick ? 'button' : 'submit'}
  >
    {children}
  </button>

export default Button
