import './App.scss';
import Typecar from './Components/Typecar';
import img from './images/img-3.png';

const App = () => {
  return (
    <div style={{ maxWidth: '70rem', margin: '0 auto' }}>
      <Typecar
        cls="typebook"
        img={img}
        title="Uloax for Every Pocket"
        description="It is established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less mor mal distribution
        of letters, as It is along established fact that a reader will be
        distracted by the readable"
        btn="book now"
      />
      <Typecar
        cls="typebook"
        img={img}
        title="Uloax for Every Pocket"
        description="It is established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less mor mal distribution
        of letters, as It is along established fact that a reader will be
        distracted by the readable"
        btn="book now"
      />

      <Typecar
        cls="typebook"
        img={img}
        title="Uloax for Every Pocket"
        description="It is established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less mor mal distribution
        of letters, as It is along established fact that a reader will be
        distracted by the readable"
        btn="book now"
      />

      <Typecar
        cls="typebook"
        img={img}
        title="Uloax for Every Pocket"
        description="It is established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less mor mal distribution
        of letters, as It is along established fact that a reader will be
        distracted by the readable"
        btn="book now"
      />
    </div>
  );
};

export default App;
