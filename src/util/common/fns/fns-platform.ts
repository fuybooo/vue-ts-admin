import {regExp} from '@/model/common/regexps'
import {ls} from '@/util/common/fns/fns'
import {KEY_IP} from '@/model/project/local-storage-keys/keys'

/**
 * @Description: 有关平台的函数
 * @author fuyongbo@everjiankang.com
 * @date 2019-07-16
 */

// 获取当前ip地址
export function getUserIP () {
  // @ts-ignore
  const MyPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
  const pc = new MyPeerConnection({iceServers: []})
  // const noop = () => {}
  const localIps: any = {}
  const ipRegExp = regExp.ip
  const iterateIP = (ip: any) => {
    if (!localIps[ip]) {
      ls(KEY_IP, ip)
    }
    localIps[ip] = true
  }
  pc.createDataChannel('')
  pc.createOffer().then((sdp: RTCSessionDescriptionInit) => {
    // @ts-ignore
    sdp.sdp.split('\n').forEach(line => {
      if (line.includes('candidate')) {
        // @ts-ignore
        line.match(ipRegExp).forEach(iterateIP)
      }
    })
    pc.setLocalDescription(sdp).catch(() => {
    })
  }).catch(() => {
  })
  pc.onicecandidate = (ice: any) => {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegExp)) {
      return
    }
    ice.candidate.candidate.match(ipRegExp).forEach(iterateIP)
  }
}

export function getIPs () {
  const ipDups: any = {}
  // @ts-ignore
  let RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
  if (!RTCPeerConnection) {
    const iframe: any = document.createElement('iframe')
    iframe.sandbox = 'allow-same-origin'
    iframe.style.display = 'none'
    document.body.appendChild(iframe)
    const win = iframe.contentWindow
    // @ts-ignore
    window.RTCPeerConnection = win.RTCPeerConnection
    // @ts-ignore
    window.mozRTCPeerConnection = win.mozRTCPeerConnection
    // @ts-ignore
    window.webkitRTCPeerConnection = win.webkitRTCPeerConnection
    // @ts-ignore
    RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
  }
  const mediaConstraints = {
    optional: [{RtpDataChannels: true}],
  }
  let servers
  // @ts-ignore
  if (window.webkitRTCPeerConnection) {
    servers = {iceServers: [{urls: 'stun:stun.services.mozilla.com'}]}
  }
  const pc = new RTCPeerConnection(servers, mediaConstraints)
  pc.onicecandidate = (ice: any) => {
    if (ice.candidate) {
      // @ts-ignore
      const ipAddr = regExp.ip.exec(ice.candidate.candidate)[1]
      if (ipDups[ipAddr] === undefined) {
      }
      ipDups[ipAddr] = true
    }
  }
  pc.createDataChannel('')
  pc.createOffer((result: any) => {
    pc.setLocalDescription(result, () => {
    }, () => {
    })
  }, () => {
  })
}
