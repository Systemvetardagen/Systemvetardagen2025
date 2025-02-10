export type Company = {
    id: number;
    name: string;
    position: { top: number; left: number };
  };
  
  export const companies: Company[] = [
    { id: 19, name: "Accenture", position: { top: 954, left: 1685 } },
    { id: 45, name: "Capgemini", position: { top: 954, left: 1792 } },
    { id: 36, name: "Banqsoft", position: { top: 1593, left: 1468 } },
    { id: 55, name: "Company 4", position: { top: 1028, left: 1549 } },
    { id: 33, name: "Company 5", position: { top: 1028, left: 1656 } },
    { id: 77, name: "Company 6", position: { top: 1028, left: 1763 } },
  ];