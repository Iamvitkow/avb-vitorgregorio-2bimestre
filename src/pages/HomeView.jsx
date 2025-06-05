import ItemCard from "../components/ItemCard";

const items = [
  { id: 1, nome: "Item 1", descricao: "Descrição do Item 1" },
  { id: 2, nome: "Item 2", descricao: "Descrição do Item 2" },
];

const HomeView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HomeView;
