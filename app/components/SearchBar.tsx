
interface SearchBarProps {
    cityVal: string;
    setCity: Function;
    handleSetCity: React.FormEventHandler<HTMLFormElement>;
  }

export default function SearchBar({cityVal, setCity, handleSetCity}:SearchBarProps) {
    return(
        <div>
        <form onSubmit={handleSetCity}>
          
          <div className="modal-action flex">
            <input
              value={cityVal}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder=" Search city name"
              className="input input-bordered w-full max-w-full h-full self-center"
            />
            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-600 py-1 px-2 rounded-sm font-medium"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
    )
}