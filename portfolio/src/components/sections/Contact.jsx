import { SectionHeading } from "../styles/layout/common/SectionHeadStyles"
import { ContactInfo, ContactStyles, DetailsWrapper, ImageWrapper } from "../styles/layout/sections/ContactStyles";
import { FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    return (
        <>
        <ContactStyles id="contact">
            <SectionHeading>
                <h1>Contact</h1>
                <p>Get In Touch</p>
            </SectionHeading>
            <DetailsWrapper>
                <ContactInfo>
                    <p>I'd love hear from you. Even if just to say hello. Don't hesitate to reach out! I'll get back to you ASAP!</p>
                    <p className="call"><strong>1-314-934-0168</strong></p>
                    <div>
                        <a href="mailto:themikedodson@gmail.com">
                            <FaEnvelope/>
                            <span> themikedodson@gmail.com</span>
                        </a><br/>
                    </div>
                </ContactInfo>
                <ImageWrapper>
                    <img src="https://lh3.googleusercontent.com/pw/AMWts8Cr1YzqxRAl2U8XppNhi6m5mqvR0QvZU-OVBF5UafcC_XZAKMJDskQEje2uIsiYtfdI4JP19gk4qtA8w2oeY0bKt6OD4FLyvqMW2JuDsDNpG3Lu7r0OgY5QZg4WV1EgxWyN6JSio6EZGO1X0JUKUZ_NK4OciMVs5jfJLkRCGznFh0FtCL4yaEVVUIa5VIXjhIh86vKvqygLglO8-BThKv3BwTInKnW7r7h7ZijSEkZe-gfGsvEcb6Ve4KBVOz41ub_uRyCipcl_SdPTJQJZatIfaC3gblHluns8zDaO709mzR3UgvsXgo-I_u5slrq8IuzzaPUvRyBOtPLy_TMsoQbMaKVLd1jzycS7qseaTXynGjjuOKD6qsA0P7PFF4bDXbzNyn42eVX56R00LblAlmBL6U6kR5gN-JDN8gFR2hhuoWwkG8h0YHIYOKgnKhn9YnedZIyjMgt1ZchD11nQdv4s09L1fVMp_1jG97Ds5LqcJH8LpEoYPB6fNDzPv1tykwDzZqCOaUnZ6MHvvWjPdhTpOH7sQAn-KIMlaNowN7oX9Vxph2G6iienCnb4Q7C2hH6CMRXRQ2ynWBIyyCAvdOizFR2FYJIn-i7PpejBppWvE9FAIz0xPKMPOqO3SRzXGK3BU-GbcB_BzB4hSvUnop9_SJW_eQhw7n2xFXJJVnc4sIR0By3kCOt3UM_QOWIZPv1DWUy-cAkqgKxkwpb1aDqTKgXDKmokgO2vI9m4k1I_8IACe2MV7_1j7rijshuqZtMZ1fE5pOD3iZtCvXvi6o8E_ic8YKT9Q3Hl8Z2uWE1OGVj2hZdBgxLZTTyMpopdq6bwABGz_2lQHfJyV6pVbiprBlZyTBbQTWTSGP_IIRjv4AoHgJtwnsU_T4iq2u0cqEP3_Q-j9g68HIXXMAletw=w754-h728-s-no?authuser=0" alt="contact" />
                </ImageWrapper>
            </DetailsWrapper>
        </ContactStyles>
        </>
    )
}