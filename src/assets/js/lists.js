const tags = [
  {
    label: "Basic",
    value: "basic",
  },
  {
    label: "Important",
    value: "important",
  },
  {
    label: "Urgent",
    value: "urgent",
  },
  {
    label: "Personal",
    value: "personal",
  },
  {
    label: "Work",
    value: "work",
  },
];

const color = [
  {
    label: "Green",
    value: "green",
    hex:"#4ceed0",
    categories: "color",
  },
  {
    label: "Yellow",
    value: "yellow",
    hex:"#F2BF06",
    categories: "color",
  },
  {
    label: "Red",
    value: "red",
    hex:"#f4815d",
    categories: "color",
  },
  {
    label: "Blue",
    value: "blue",
    hex:"#00D5FC",
    categories: "color",
  },
  {
    label: "Violet",
    value: "violet",
    hex:"#BB99FF",
    categories: "color",
  },
];

const colorMap = {
  green: "#4ceed0",
  yellow: "#F2BF06",
  blue: "#00D5FC",
  red: "#f4815d",
  violet: "#BB99FF",
};

const borderColorMap = {
  green: "rgb(85, 168, 156)",
  yellow: "rgb(168, 136, 85)",
  blue: "rgb(85, 106, 168)",
  red: "rgb(168, 85, 85)",
  violet: "rgb(91, 85, 168)",
};

const tagColorMap = {
  green: "rgb(36, 198, 168)",
  yellow: "rgb(202, 151, 0)",
  blue: "rgb(0, 173, 212)",
  red: "rgb(204, 89, 53)",
  violet: "rgb(91, 85, 168)",
};

const titleMap = {
  daily: "today's",
  weekly: "week's",
  monthly: "month's",
}
export {
    tags,
    color,
    colorMap,
    borderColorMap,
    tagColorMap,
    titleMap,
}