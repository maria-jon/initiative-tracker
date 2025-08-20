function Controls({ onNext, onSort, onClear }) {

    return <>
        <div class="controls">
            <button onClick=onNext>Next</button>
            <button onClick=onSort>Sort</button>
            <button onClick=onClear>Clear</button>
        </div>
    </>
}
  export default Controls;