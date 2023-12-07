const attributes = {};
const modules = import.meta.glob("./*.vue", { eager: true });
for (let each in modules) {
  const name = modules[each].default.__name;
  attributes[name] = modules[each].default;
}

export default attributes;
