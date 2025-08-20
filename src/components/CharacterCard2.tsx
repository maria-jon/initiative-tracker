function CharacterCard({ data, isActive, onEditField, onRemove, onClick }):
  // simple grid card; highlight when isActive
  <article class={"card " + (isActive ? "active" : "")} onClick=onClick>
    <header>
      <strong>{data.name}</strong>
      <button aria-label="Remove" onClick={stopProp; onRemove()}>✕</button>
    </header>

    <div class="row">
      <label>Init</label>
      <input type="number" min=0 max=20 value=data.initiative onChange=(e)=>onEditField("initiative", clampNumber(e.target.value,0,20)) />
    </div>

    <div class="row">
      <label>HP</label>
      <input type="number" value=data.hp onChange=(e)=>onEditField("hp", Number(e.target.value)) />
    </div>

    <div class="row">
      <label>AC</label>
      <input type="number" value=data.ac onChange=(e)=>onEditField("ac", Number(e.target.value)) />
    </div>
  </article>
