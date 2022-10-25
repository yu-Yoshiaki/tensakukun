const material = [
  {
    gender: "男性",
    age: 20,
    location: "東京",
  },
  {
    gender: "女性",
    age: 30,
    location: "東京",
  },
  {
    gender: "男性",
    age: 20,
    location: "大阪",
  },
  {
    gender: "女性",
    age: 30,
    location: "東京",
  },
  {
    gender: "男性",
    age: 30,
    location: "名古屋",
  },
  {
    gender: "女性",
    age: 30,
    location: "東京",
  },
  {
    gender: "男性",
    age: 40,
    location: "東京",
  },
  {
    gender: "女性",
    age: 30,
    location: "東京",
  },
];

export const ClossAna = () => {
  const row = [["gender", "age"], "location"];
  const colum = [];
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">クロス分析</h3>
    </div>
  );
};
