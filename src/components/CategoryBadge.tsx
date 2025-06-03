import { cn, formatCategory } from "@/lib/utils";

const transactionCategoryStyles = {
  "Food And Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  "General Merchandise": {
    borderColor: "border-yellow-600",
    backgroundColor: "bg-yellow-500",
    textColor: "text-yellow-700",
    chipBackgroundColor: "bg-yellow-50",
  },
  Transportation: {
    borderColor: "border-indigo-600",
    backgroundColor: "bg-indigo-500",
    textColor: "text-indigo-700",
    chipBackgroundColor: "bg-indigo-50",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Entertainment: {
    borderColor: "border-purple-600",
    backgroundColor: "bg-purple-500",
    textColor: "text-purple-700",
    chipBackgroundColor: "bg-purple-50",
  },
  "Loan Payments": {
    borderColor: "border-rose-600",
    backgroundColor: "bg-rose-500",
    textColor: "text-rose-700",
    chipBackgroundColor: "bg-rose-50",
  },
  Income: {
    borderColor: "border-emerald-600",
    backgroundColor: "bg-emerald-500",
    textColor: "text-emerald-700",
    chipBackgroundColor: "bg-emerald-50",
  },

  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const formattedCategory = formatCategory(category);
  const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
    transactionCategoryStyles[
      formattedCategory as keyof typeof transactionCategoryStyles
    ] || transactionCategoryStyles.default;

  return (
    <div className={cn("category-badge", borderColor, chipBackgroundColor)}>
      <div className={cn("size-2 rounded-full", backgroundColor)} />
      <p className={cn("text-[12px] font-medium capitalize", textColor)}>
        {formattedCategory}
      </p>
    </div>
  );
};

export default CategoryBadge;
