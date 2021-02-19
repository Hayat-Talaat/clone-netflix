import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />

      <Footer.Row>
        <Footer.Column>
          <Footer.Link>FAQ</Footer.Link>
          <Footer.Link>Investor Relations</Footer.Link>
          <Footer.Link>Privacy</Footer.Link>
          <Footer.Link>Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link>Help Center</Footer.Link>
          <Footer.Link>Jobs</Footer.Link>
          <Footer.Link>Cookie Preferences</Footer.Link>
          <Footer.Link>Legal Notices</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link>Account</Footer.Link>
          <Footer.Link>Ways to Watch</Footer.Link>
          <Footer.Link>Corporate Information</Footer.Link>
          <Footer.Link>Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link>Media Center</Footer.Link>
          <Footer.Link>Terms of Use</Footer.Link>
          <Footer.Link>Contact Us</Footer.Link>
        </Footer.Column>
      </Footer.Row>

      <Footer.Break />
      <Footer.Text>Netflix Egypt</Footer.Text>
    </Footer>
  );
}
