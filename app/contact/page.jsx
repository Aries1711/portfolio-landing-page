import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/contents/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary dark:text-white text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary dark:bg-white"></span>
              Say Hello
              <img
                src="https://raw.githubusercontent.com/aemmadi/aemmadi/master/wave.gif"
                width="30px"
              />
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together. </h1>
            <p className="subtitle max-w-[400px]">
              Ready to bring your ideas to life with cutting-edge solutions? Get
              in touch today!
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary dark:text-blue-300" />
              <div>ariesfreey17@gmail.com</div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary dark:text-blue-300" />
              <div>Sritanjung Street number 120, Jember. Indonesia</div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall
                size={18}
                className="text-primary dark:text-blue-300"
              />
              <div>+62 838 3555 1491</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
