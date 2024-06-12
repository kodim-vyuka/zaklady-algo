const linearGrowth = (p1, p2, n) => {
  return p1 * n + p2;
};

const quadraticGrowth = (p1, p2, p3, n) => {
  return p1 * n ** 2 + p2 * n + p3;
};

for (let i = 1; i <= 12; i++) {
  const rand = Math.round(Math.random() * 80 - 40);
  console.log(linearGrowth(-12.8, 246, i) + rand);
}
