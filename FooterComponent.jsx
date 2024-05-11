import { FooterHelp, Text, Button } from "@shopify/polaris";

function FooterComponent() {
  const foundedYear = "2023"
  const currentYear = new Date().getFullYear();
  const privacyPolicyUrl = "https://www.example.com/privacy-policy";
  const privacyPolicyText = "Privacy Policy";
  const rightsReservedText = "[Your-company-name]. All Rights Reserved.";

  return (
    <div>
      <FooterHelp>
        <Text as="span" variant="bodySm">
          &copy; <span>{foundedYear}-</span><span>{currentYear}</span> {rightsReservedText}
        </Text>
      </FooterHelp>
      <FooterHelp>
        <Button
          variant="plain"
          onClick={() => {
            window.open(privacyPolicyUrl, "_blank");
          }}
        >
          {privacyPolicyText}
        </Button>
      </FooterHelp>
    </div>
  );
}

export default FooterComponent;