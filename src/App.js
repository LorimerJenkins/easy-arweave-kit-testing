import './App.css';
import { ArweaveKit } from 'arweavekit/auth'
import { externalPackage1 } from './externalPackage';
import { WarpPlugIn } from './WarpPlugIn';


function App() {

  async function testArweaveKit() {

    // init arweave kit
    const arweaveKit = ArweaveKit.use(externalPackage1()).use(WarpPlugIn())
    console.log(arweaveKit)

    // ArConnect
    await arweaveKit.connect({ permissions: ['ACCESS_ADDRESS', 'ACCESS_ALL_ADDRESSES', 'ACCESS_PUBLIC_KEY', 'ACCESS_ARWEAVE_CONFIG'] })
    const activeAddress = await arweaveKit.getActiveAddress()
    console.log(activeAddress)

    // External package 1
    const function1Response = await arweaveKit.functionFromPackage1()
    console.log(function1Response)

    // External Bundlr plug in
    const warp = await arweaveKit.WarpFactory.forMainnet();
    console.log(warp)

  }


  return (
    <div className="App">
      <button className='testFunctionButton' onClick={testArweaveKit}>Press button</button>
    </div>
  );
}

export default App;
