import CreateRoomForm from "@/components/CreateRoomForm"


const CreateRoomPage = () => {
  return (
    <div className="flex flex-col gap-8 pt-12 pb-24">
      <h1 className="text-4xl text-bold">Create Room Form</h1>
      <CreateRoomForm />
    </div>
  );
};

export default CreateRoomPage;