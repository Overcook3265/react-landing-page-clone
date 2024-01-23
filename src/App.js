import './index.scss';
import styles from './App.module.scss';
import Header from './Header';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <div>Quit drinking or else!</div>
      </main>
      <section>
        <div className={styles.hero}>
          <h1>Cut back on your drinking with no pressure to quit.</h1>
          <p>
            146 million U.S. adults drink alcohol, and 47% want to cut back. If
            you're one of them, we have the tools to help, and we'll never judge
            you.
          </p>
          <button>Take the 3 Min Quiz</button>
          <p>Start for free, cancel anytime</p>
          <img
            src="/img/home_hero.png"
            alt="woman proudly texting her progress"
          />
        </div>
      </section>
      <section>
        <div className={styles.claim}>
          <h1>Small changes, big impact</h1>
          <p>
            Sunnyside provides a simple but structured approach to help you
            drink more mindfully. You'll feel the difference.
          </p>
        </div>
        <div className={styles.benefits}>
          <img src="" alt="alt" />
          <h2>More Energy</h2>
          <p>Greet the day with increased energy and focus.</p>
        </div>
        <div className={styles.benefits}>
          <img src="" alt="alt" />
          <h2>Improved Wellness</h2>
          <p>Feel your best, inside and out.</p>
        </div>
        <div className={styles.benefits}>
          <img src="" alt="alt" />
          <h2>Better Sleep</h2>
          <p>Enjoy more restful sleep and brighter mornings.</p>
        </div>
        <div className={styles.benefits}>
          <img src="" alt="alt" />
          <h2>Healthier Diet</h2>
          <p>Cut the empty sugar from those extra drinks.</p>
        </div>
        <div className={styles.benefits}>
          <img src="" alt="alt" />
          <h2>Save Money</h2>
          <p>Spend less on drinks while still enjoying yourself.</p>
        </div>
        <div className={styles.benefits}>
          <img src="" alt="alt" />
          <h2>Have More Fun</h2>
          <p>Make the drinks you have more enjoyable.</p>
        </div>
      </section>
      <section>
        <h4>DESIGNED TO FIT YOUR LIFE</h4>
        <div className={styles.manual}>
          <h3>Create an intention for your week ahead</h3>
          <p>
            We'll recommend targets for you each week, which you can customize
            to fit your schedule and preferences.
          </p>
        </div>
        <div className={styles.manual}>
          <h3>Track each drink, it's as easy as sending a text.</h3>
          <p>
            An emoji (or a number) is all it takes. We come to you, making it
            super easy to stay on plan and reach your goals.
          </p>
        </div>
        <div className={styles.manual}>
          <h3>
            Celebrate your achievements and gain relevant insights over time.
          </h3>
          <p>
            Celebrate your achievements and gain relevant insights over time.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.claim}>
          <h1>How it Works</h1>
          <p>
            We believe there's power in finding balance. Sunnyside helps you
            ease into mindful drinking at your own pace.
          </p>
        </div>
        <div className={styles.steps}>
          <img src="" alt="" />
          <h3>
            01.
            <br />
            Take the quiz.
          </h3>
          <p>
            Tell us a little bit about yourself and your goals so we can
            personalize your experience. This is a judgement-free zone.
          </p>
          <button>Take the 3 min Quiz.</button>
        </div>
        <div className={styles.stepsreverse}>
          <img src="" alt="" />
          <h3>
            02.
            <br />
            Follow your
            <br />
            personalized plan.
          </h3>
          <p>
            Based on your starting point, we'll make recommendations and text
            you reminders to help you meet your goals.
          </p>
          <button>Take the 3 min Quiz.</button>
        </div>
        <div className={styles.steps}>
          <img src="" alt="" />
          <h3>
            03.
            <br />
            Stick with it
            <br />
            long term.
          </h3>
          <p>
            Based on your starting point, we'll make recommendations and text
            you reminders to help you meet your goals.
          </p>
          <button>Take the 3 min Quiz.</button>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <footer>I'm a footer</footer>
    </div>
  );
}
