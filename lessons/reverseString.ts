const reverse = (str: string) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'wrong input';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
};

const reverse2 = (str: any) =>  [...str].reverse().join('')