function Footer() {
  return (
    <footer className="flex flex-col items-start mt-auto text-teal-300">
      <div className="divider"></div>

      <div className="grid grid-cols-2 justify-start pl-3">
        <div>
          <p>Logo</p>
          Copyright &copy; SalaryCalculator {new Date().getFullYear()}
        </div>
        <div>Seteaza preferinte cookies</div>
      </div>
    </footer>
  );
}

export default Footer;
