import './App.css';

export default function App() {
  const handleAnchorClick = event => {
    // 👇️ use event.preventDefault() if you want to
    // Prevent navigation
    // event.preventDefault();

    console.log('Anchor element clicked');

    // 👇️ Refers to the link element
    console.log(event.currentTarget);
  };
  return (
    <div>
      <a
        onClick={handleAnchorClick}
        href="https://bobbyhadz.com"
        target="_blank"
        rel="noreferrer"
      >
        bobbyhadz.com
      </a>
    </div>
  );
}
