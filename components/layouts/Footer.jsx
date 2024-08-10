import Socials from "../contents/Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            IconsStyles="text-blue-100 dark:text-white/70 text-[20px] hover:text-white transition-all"
          />
          {/* Copyrights */}
          <div className="text-muted-foreground">
            Copyright &copy; Arisqi Setyawan. All rights reserved. 2017 ~
            present.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
