import { BannerLink, BannerSection, TopBannerStyles } from "../styles/layout/TopBannerStyles"

export const TopBanner = () => {
    return (
        <TopBannerStyles>
            <BannerSection showOnMobile>
                <BannerLink href="mailto:themikedodson@gmail.com">🔥themikedodson@gmail.com</BannerLink>
            </BannerSection>
            <BannerSection>
                <h3>⚡️Available For Hire</h3>
            </BannerSection>
        </TopBannerStyles>
    )
}