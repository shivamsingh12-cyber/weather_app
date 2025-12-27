export default function searchBar() {
    return (
        <div className="w-full gap-x-4 bg-green-300 flex justify-center items-center p-4">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" type="email" name="email" required placeholder="Enter your email" autoComplete="email" className="min-w-0 w-72 sm:w-96 rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search here</button>
        </div>
    );
}