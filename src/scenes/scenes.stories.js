/**
 * MIT License
 *
 * Copyright (c) 2019 BottleTech Limited
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { useState } from 'react'

import Marzipano from 'Marzipano'


function SceneSwitcher(props) {
  const { sceneIds, onSwitchId } = props

  return (
    <div>
      {sceneIds.map(id => <button key={id} onClick={() => onSwitchId(id)}>{id}</button>)}
    </div>
  )
}

export default {
  title: 'Scenes'
}

// export const OneSceneComponent = () => (
//   <Marzipano>
//     <Scene current id='0' imageUrl='https://www.marzipano.net/media/equirect/angra.jpg' type='equirect'/>
//   </Marzipano>
// )
//
// export const OneCubemapComponent = () => (
//   <Marzipano>
//     <Scene current id='avdxc' imageUrl='https://www.marzipano.net/media/cubemap/{f}.jpg' type='cubemap'
//       levels={[{ tileSize: 1024, size: 1024 }]} />
//   </Marzipano>
// )
//
// export const MultipleSceneComponents = () => {
//   const [currentId, setId] = useState(0)
//
//   return (
//     <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <SceneSwitcher sceneIds={[0, 1, 2]} onSwitchId={id => setId(id)} />
//       <Marzipano>
//         <Scene current={currentId === 0} imageUrl='https://www.marzipano.net/media/equirect/angra.jpg' type='equirect'/>
//         <Scene current={currentId === 1} imageUrl='https://www.marzipano.net/media/cubemap/{f}.jpg' type='cubemap'
//           levels={[{ tileSize: 1024, size: 1024 }]} />
//         <Scene current={currentId === 2}
//           imageUrl={(tile) => {
//             const prefix = 'https://www.marzipano.net/media/prague'
//             if (tile.z === 0) {
//               const mapY = 'lfrbud'.indexOf(tile.face) / 6
//               return { url: `${prefix}/preview.jpg`, rect: { x: 0, y: mapY, width: 1, height: 1 / 6 } }
//             }
//             return {
//               url: `${prefix}/l${tile.z}/${tile.face}/${tile.y + 1}/${tile.x + 1}.jpg`
//             }
//           }}
//           type='cubemap'
//           levels={[
//             { tileSize: 256, size: 256, fallbackOnly: true },
//             { tileSize: 512, size: 512 },
//             { tileSize: 512, size: 1024 },
//             { tileSize: 512, size: 2048 },
//             { tileSize: 512, size: 4096 },
//             { tileSize: 512, size: 8192 },
//             { tileSize: 512, size: 16384 },
//             { tileSize: 512, size: 32768 },
//             { tileSize: 512, size: 65536 }
//           ]}/>
//       </Marzipano>
//     </div>
//   )
// }

export const SceneProp = () => {
  const scenes = [
    { current: true, imageUrl: 'https://www.marzipano.net/media/equirect/angra.jpg', type: 'equirect' }
  ]
  return <Marzipano scenes={scenes} />
}

const loadPrague = (tile) => {
  const prefix = 'https://www.marzipano.net/media/prague'
  if (tile.z === 0) {
    const mapY = 'lfrbud'.indexOf(tile.face) / 6
    return { url: `${prefix}/preview.jpg`, rect: { x: 0, y: mapY, width: 1, height: 1 / 6 } }
  }
  return {
    url: `${prefix}/l${tile.z}/${tile.face}/${tile.y + 1}/${tile.x + 1}.jpg`
  }
}

export const MultipleSceneProps = () => {
  const [currentId, setId] = useState(0)

  const scenes = [
    {
      current: currentId === 0,
      imageUrl: 'https://www.marzipano.net/media/equirect/angra.jpg',
      type: 'equirect'
    },
    {
      current: currentId === 1,
      imageUrl: 'https://www.marzipano.net/media/cubemap/{f}.jpg',
      type: 'cubemap',
      levels: [{ tileSize: 1024, size: 1024 }]
    },
    {
      current: currentId === 2,
      imageUrl: loadPrague,
      type: 'cubemap',
      levels: [
        { tileSize: 256, size: 256, fallbackOnly: true },
        { tileSize: 512, size: 512 },
        { tileSize: 512, size: 1024 },
        { tileSize: 512, size: 2048 },
        { tileSize: 512, size: 4096 },
        { tileSize: 512, size: 8192 },
        { tileSize: 512, size: 16384 },
        { tileSize: 512, size: 32768 },
        { tileSize: 512, size: 65536 }
      ]
    }
  ]
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <SceneSwitcher sceneIds={[0, 1, 2]} onSwitchId={id => setId(id)} />
      <Marzipano scenes={scenes} />
    </div>
  )
}
