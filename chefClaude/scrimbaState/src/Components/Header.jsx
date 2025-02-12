import chefImg from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <img src={chefImg} alt="chef logo" className="chefimg" />
      <h1>Chef Claude</h1>
    </header>
  );
}
