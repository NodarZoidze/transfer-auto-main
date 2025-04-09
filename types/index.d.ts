declare type transportType = "სედანი" | "ჯიპი" | "მოტოციკლეტი" | "ფურგონი";

declare type TransportTypeCardTypes = {
  transportType: transportType;
  text: string;
  image: any;
  styles: {
    bg: string;
  };
  id: number;
  onReserve?: (type: string) => void;
};

declare type PlanCardProps = {
  distance: number;
  arrivalTime: string;
  service: string;
  price: number;
  fromLocation: string;
  toLocation: string;
  bgColor?: string;
  iconColor?: string;
};

declare interface SearchDirectionProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
