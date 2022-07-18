import React, { useState, use } from "react";
import { Grid, Section, FAQS, Article } from "./styles/learnStyles";
import { GrFormAdd } from "react-icons/gr";

const FAQ = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(true);
  const [toggle5, setToggle5] = useState(true);
  const [toggle6, setToggle6] = useState(true);
  const [toggle7, setToggle7] = useState(true);
  return (
    <Section mt="7%">
      <Grid>
        <h3>FAQ's</h3>
        <FAQS>
          <Article>
            <header>
              <h5 onClick={() => setToggle(!toggle)}>
                <span>
                  <GrFormAdd />
                </span>{" "}
                What is PeersApp?
              </h5>
            </header>

            {!toggle && (
              <p>
                PeersApp is a social networking service that is aimed at
                creating a link between social networking and creating
                educational opportunities. With PeersApp, you can communicate
                with course mates, carry out group projects, store and access
                learning materials, view the status of other students, have
                access to empowerment opportunities and lots more.
              </p>
            )}
          </Article>
          <br />
          <br />
          <Article>
            <header>
              <h5 onClick={() => setToggle1(!toggle1)}>
                <span>
                  <GrFormAdd />
                </span>{" "}
                Who is PeersApp for?
              </h5>
            </header>

            {!toggle1 && (
              <p>
                PeersApp was created for students to help them have a platform
                to learn and socialize. Any student can make use of the app.
              </p>
            )}
          </Article>
          <br />
          <br />
          <Article>
            <header>
              <h5 onClick={() => setToggle2(!toggle2)}>
                <span>
                  <GrFormAdd />
                </span>{" "}
                Where can I get PeersApp?
              </h5>
            </header>

            {!toggle2 && (
              <p>
                PeersApp will be made available for download on Google PlayStore
                for android and App Store for iOS.
              </p>
            )}
          </Article>
          <br />
          <br />
          <Article>
            <header>
              <h5 onClick={() => setToggle3(!toggle3)}>
                <span>
                  <GrFormAdd />
                </span>{" "}
                How do I sign up on PeersApp?
              </h5>
            </header>

            {!toggle3 && (
              <p>
                You can sign up with your email address and a password chosen by
                you. A confirmation code will be sent to your mail, you input
                that and it's done! You can finish setting up your profile
                afterwards or when convenient.
              </p>
            )}
          </Article>
          <br />
          <br />
          <Article>
            <header>
              <h5 onClick={() => setToggle4(!toggle4)}>
                <span>
                  <GrFormAdd />{" "}
                </span>{" "}
                How do I contact people?
              </h5>
            </header>

            {!toggle4 && (
              <p>
                You can message anyone already in your contact list. Those not
                on your contact can be found by looking up their username,
                provided they are signed up to PeersApp.
              </p>
            )}
          </Article>
          <br />
          <br />
          <Article>
            <header>
              <h5 onClick={() => setToggle5(!toggle5)}>
                <span>
                  <GrFormAdd />{" "}
                </span>{" "}
                Who can see my personal information ?
              </h5>
            </header>

            {!toggle5 && (
              <p>
                On PeersApp, you can send messages in private chats and groups
                without making your personal information visible. By default,
                your number is visible to people in your contact list. You can
                modify this in the app privacy settings. However, it will still
                be visible to those who have saved your number in their contact
                list.
              </p>
            )}
          </Article>
          <br />
          <br />
          <Article>
            <header>
              <h5 onClick={() => setToggle6(!toggle6)}>
                <span>
                  <GrFormAdd />{" "}
                </span>{" "}
                How do I know my personal information is safe?
              </h5>
            </header>

            {!toggle6 && (
              <p>
                We pride ourselves in ensuring utmost privacy to our users.
                PeersApp will never sell your personal data to any third-party
                such as marketers, advertisers, etc. We only keep the
                information needed to function as an interactive platform.
              </p>
            )}
          </Article>
          <br />
          <br />
          <Article>
            <header>
              <h5 onClick={() => setToggle7(!toggle7)}>
                <span>
                  <GrFormAdd />{" "}
                </span>{" "}
                Is there anyone to talk to incase of questions or complaints?
              </h5>
            </header>

            {!toggle7 && (
              <p>
                Yes! You can contact us at contactofficialpeersapp@gmail.com. We
                also have a live support chat on PeersApp and no, you won't be
                chatting with a bot. You get real answers from real people.
              </p>
            )}
          </Article>
        </FAQS>
      </Grid>
    </Section>
  );
};

export default FAQ;
