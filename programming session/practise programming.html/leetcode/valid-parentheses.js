function bracket(s) {
  const empty = [];
  const Pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    const sans = s[i];

    if  (sans === '(' || sans === '{' || sans === '[')  {
      empty.push(sans);
    } else {
      if (empty.length === 0 ||Pairs[empty.pop()] !== sans) {
        return false;
      }
    }
  }
  return empty.length === 0;
}
console.log(bracket("{}[]([])"))
