import { Badge } from "./ui/badge";

const TagsList = ({ tags }: { tags: string[] }) => {
    console.log(tags);
  return (
    <div className="flex gap-2 flex-wrap">
      {tags?.map((tag) => (
        <Badge className="w-fit" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default TagsList;
