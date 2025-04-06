"use client"

import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export class HomePageBackgroundScene {
  
  canvas: HTMLCanvasElement
  controls: OrbitControls
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  renderer: THREE.WebGLRenderer
  wavePlane: THREE.Group

  constructor(canvas: HTMLCanvasElement) {

    this.canvas = canvas
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true })
    this.renderer.setSize( window.innerWidth, window.innerHeight )
    
    this.renderer.setClearColor(0x080808, 0)
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.scene.fog = new THREE.FogExp2(0x101010, 0.65)


    const gridWidth = 20;
    const gridHeight = 20;
    const divisions = 100; // number of grid lines per direction
    const lineSegments = 100; // subdivisions for each grid line
    const gridMaterial = new THREE.LineBasicMaterial({ color: 0x666666 })
    const gridGroup = new THREE.Group()
    
    // Create vertical lines (lines of constant x)
    for (let i = 0; i <= divisions; i++) {
      const x = -gridWidth / 2 + (gridWidth / divisions) * i;
      const positions = new Float32Array((lineSegments + 1) * 3);
      for (let j = 0; j <= lineSegments; j++) {
        const z = -gridHeight / 2 + (gridHeight / lineSegments) * j
        positions[j * 3] = x
        positions[j * 3 + 1] = 0; // initial y = 0
        positions[j * 3 + 2] = z
      }
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const line = new THREE.Line(geometry, gridMaterial)
      gridGroup.add(line)
    }
    
    // Create horizontal lines (lines of constant z)
    for (let i = 0; i <= divisions; i++) {
      const z = -gridHeight / 2 + (gridHeight / divisions) * i
      const positions = new Float32Array((lineSegments + 1) * 3)
      for (let j = 0; j <= lineSegments; j++) {
        const x = -gridWidth / 2 + (gridWidth / lineSegments) * j
        positions[j * 3] = x
        positions[j * 3 + 1] = 0 // initial y = 0
        positions[j * 3 + 2] = z
      }
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const line = new THREE.Line(geometry, gridMaterial)
      gridGroup.add(line)
    }
    
    this.wavePlane = gridGroup
    this.scene.add(this.wavePlane)

    this.camera.setViewOffset(
      window.innerWidth, window.innerHeight, // fullWidth, fullHeight
      (window.innerWidth * -0.125), (window.innerHeight * 0.0625), // x and y offset
      window.innerWidth, window.innerHeight // frustum size
    )
    this.camera.updateProjectionMatrix()

    const mainElement = document.querySelector(".mainPage")

    this.controls = new OrbitControls(this.camera, this.canvas)
    this.controls.enableDamping = true
    this.controls.zoomToCursor = true
    this.camera.position.set( 0.75, 1.25, 1 )
    this.controls.target.set(0, 0, 0)
    this.controls.maxDistance = 3
    this.controls.update()

    window.addEventListener('resize', this.onWindowResize.bind(this))

    this.animate()

  }

  onWindowResize() {

    this.camera.aspect = window.innerWidth / window.innerHeight

    this.camera.setViewOffset(
      window.innerWidth, window.innerHeight, // fullWidth, fullHeight
      (window.innerWidth * -0.125), (window.innerHeight * 0.0625), // x and y offset
      window.innerWidth, window.innerHeight // frustum size
    )

    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)

  }
  
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    
    const elapsed = Date.now() * 0.001
    
    this.wavePlane.children.forEach((child) => {
      const line = child as THREE.Line;
      const positionAttribute = line.geometry.attributes.position;
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i)
        // Use x (or z, or a combination) to compute y for a sine wave
        const y = Math.sin(x * 2 + elapsed * 0.5) * 0.15;
        positionAttribute.setY(i, y)
      }
      positionAttribute.needsUpdate = true;
    });
    
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
    this.renderer.resetState()
  }

}
