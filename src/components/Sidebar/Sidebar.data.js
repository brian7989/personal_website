const email = "brian.ts.lee.0907@gmail.com";
const phone = "+1 470-676-6977";

export const sidebar_data = {
    name: "Brian Lee",
    seekingJob: true,
    contact_info: [
        {
            title: "email",
            content: email,
            href: `mailto:${email}`,
            logo: "mail-outline"
        },
        {
            title: "phone",
            content: phone,
            href: `tel:${phone}`,
            logo: "phone-portrait-outline"
        },
        {
            title: "location",
            content: "Atlanta, Georgia, USA",
            href: null,
            logo: "location-outline"
        },
        {
            title: "birthday",
            content: "Sept 7th, 2000",
            href: null,
            logo: "calendar-outline"
        }
    ],
    socials: [
        {
            type: "linkedin",
            link: "https://www.linkedin.com/in/brian7989/",
        },
        {
            type: "github",
            link: "https://github.com/brian7989",
        },
    ]
}