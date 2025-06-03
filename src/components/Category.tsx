import Image from "next/image";

import { cn, formatCategory } from "@/lib/utils";

import { Progress } from "./ui/progress";

const topCategoryStyles = {
  "Food And Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/foodAndDrink.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/travel.svg",
  },
  "General Merchandise": {
    bg: "bg-purple-25",
    circleBg: "bg-purple-100",
    text: {
      main: "text-purple-900",
      count: "text-purple-700",
    },
    progress: {
      bg: "bg-purple-100",
      indicator: "bg-purple-700",
    },
    icon: "/icons/merchandise.svg",
  },
  Transportation: {
    bg: "bg-orange-25",
    circleBg: "bg-orange-100",
    text: {
      main: "text-orange-900",
      count: "text-orange-700",
    },
    progress: {
      bg: "bg-orange-100",
      indicator: "bg-orange-700",
    },
    icon: "/icons/transportation.svg",
  },
  Entertainment: {
    bg: "bg-yellow-25",
    circleBg: "bg-yellow-100",
    text: {
      main: "text-yellow-900",
      count: "text-yellow-700",
    },
    progress: {
      bg: "bg-yellow-100",
      indicator: "bg-yellow-700",
    },
    icon: "/icons/entertainment.svg",
  },
  "Loan Payments": {
    bg: "bg-red-25",
    circleBg: "bg-red-100",
    text: {
      main: "text-red-900",
      count: "text-red-700",
    },
    progress: {
      bg: "bg-red-100",
      indicator: "bg-red-700",
    },
    icon: "/icons/credit-card.svg",
  },
  Income: {
    bg: "bg-green-25",
    circleBg: "bg-green-100",
    text: {
      main: "text-green-900",
      count: "text-green-700",
    },
    progress: {
      bg: "bg-green-100",
      indicator: "bg-green-700",
    },
    icon: "/icons/money-send.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

const Category = ({ category }: CategoryProps) => {
  const formattedCategoryName = formatCategory(category.name);

  const {
    bg,
    circleBg,
    text: { main, count },
    progress: { bg: progressBg, indicator },
    icon,
  } = topCategoryStyles[
    formattedCategoryName as keyof typeof topCategoryStyles
  ] || topCategoryStyles.default;

  return (
    <div className={cn("gap-[18px] flex p-4 rounded-xl", bg)}>
      <figure className={cn("flex-center size-10 rounded-full", circleBg)}>
        <Image src={icon} width={20} height={20} alt={formattedCategoryName} />
      </figure>
      <div className="flex w-full flex-1 flex-col gap-2">
        <div className="text-14 flex justify-between">
          <h2 className={cn("font-medium", main)}>{formattedCategoryName}</h2>
          <h3 className={cn("font-normal", count)}>{category.count}</h3>
        </div>
        <Progress
          value={(category.count / category.totalCount) * 100}
          className={cn("h-2 w-full", progressBg)}
          indicatorClassName={cn("h-2 w-full", indicator)}
        />
      </div>
    </div>
  );
};

export default Category;
