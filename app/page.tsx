import { db } from "@/drizzle/client";


const Home = async() => {
  const items = await db.query.users.findMany();

  return (
    <div>
      {items.map((item) => (
        <div className="" key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Home;
