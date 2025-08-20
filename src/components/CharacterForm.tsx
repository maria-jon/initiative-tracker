function CharacterForm({ onAdd }):
  local state: name, initiative, hp, ac
  onSubmit(e):
    e.preventDefault()
    if name.trim()=="" -> error
    if initiative not in [0..20] -> error
    onAdd({ name, initiative: Number(initiative), hp: Number(hp), ac: Number(ac) })
    clear inputs
  return form with 4 inputs + submit
