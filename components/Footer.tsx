const Footer = () => {
  return (
    <footer className="bg-[#2845a7] text-white w-full mt-auto">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-sm md:text-base">
          Nexus International Alliance Pvt Ltd
        </div>
        <div className="text-sm md:text-base">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;