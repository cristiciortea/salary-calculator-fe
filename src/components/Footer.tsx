function Footer() {
  return (
    <footer>
      <div className="flex flex-col w-full">
        <div className="divider"></div>

        <div className="grid grid-cols-2 justify-start pl-3">
          <div>
            <p>Logo</p>
            Copyright &copy; SalaryCalculator {new Date().getFullYear()}
          </div>
          <div>Seteaza preferinte cookies</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
