"use client"

import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export class HomePageBackgroundScene {
  
  canvas: HTMLCanvasElement
  controls: OrbitControls
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  renderer: THREE.WebGLRenderer

  constructor(canvas: HTMLCanvasElement) {

    this.canvas = canvas
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true })
    this.renderer.setSize( window.innerWidth, window.innerHeight )
    
    this.renderer.setClearColor(0x080808, 0)
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.scene.fog = new THREE.FogExp2(0x101010, 0.15)

    const gridHelper = new THREE.GridHelper(100, 100, 0x444444, 0x444444)
    const defaultCube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color: 0x00ffff}))
    this.scene.add( gridHelper, defaultCube )

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
    this.camera.position.set( 2, 2, 2 )
    this.controls.target.set(0, 0, 0)
    this.controls.update()

    this.animate()

  }
  
  animate() {
    requestAnimationFrame( this.animate.bind(this) )
    this.controls.update()
    this.renderer.render( this.scene, this.camera )
  }

}
