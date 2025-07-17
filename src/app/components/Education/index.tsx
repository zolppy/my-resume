import { Education as EducationType } from "@/utils/types/education";

export function Education({
  title,
  institution,
  date,
}: Omit<EducationType, "id">) {
  return (
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-700">{institution}</p>
      <p className="text-sm text-gray-600 mb-1">{date}</p>
    </div>
  );
}

Education.displayName = "Education";
