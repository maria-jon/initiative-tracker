function CharacterGrid({ characters, activeId, onEdit, onRemove, onPickActive }):
  <section role="grid">
    characters.forEach((c, idx) =>
      <CharacterCard
        key=c.id
        data=c
        isActive=(c.id == activeId)
        onEditField=(field, value) => onEdit(c.id, { [field]: value })
        onRemove=() => onRemove(c.id)
        onClick=() => onPickActive(idx)   // optional: select active on click
      />
    )
  </section>
