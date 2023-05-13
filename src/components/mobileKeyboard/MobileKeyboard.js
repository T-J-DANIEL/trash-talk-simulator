import React from "react"
import { useGlobalContext } from "../../context"
import MobileKey from "./MobileKey"
import MobileFunctionKey from "./MobileFunctionKey"
const MobileKeyboard = () => {
  const {} = useGlobalContext()
  return (
    <div className="mobile-keyboard">
      <div className="mobile-keyboard-row">
        <MobileKey keyValue={"q"} />
        <MobileKey keyValue={"w"} />
        <MobileKey keyValue={"e"} />
        <MobileKey keyValue={"r"} />
        <MobileKey keyValue={"t"} />
        <MobileKey keyValue={"y"} />
        <MobileKey keyValue={"u"} />
        <MobileKey keyValue={"i"} />
        <MobileKey keyValue={"o"} />
        <MobileKey keyValue={"p"} />
      </div>
      <div className="mobile-keyboard-row">
        <MobileKey keyValue={"a"} />
        <MobileKey keyValue={"s"} />
        <MobileKey keyValue={"d"} />
        <MobileKey keyValue={"f"} />
        <MobileKey keyValue={"g"} />
        <MobileKey keyValue={"h"} />
        <MobileKey keyValue={"j"} />
        <MobileKey keyValue={"k"} />
        <MobileKey keyValue={"l"} />
      </div>
      <div className="mobile-keyboard-row">
        <MobileFunctionKey keyValue="shift" />
        <MobileKey keyValue={"z"} />
        <MobileKey keyValue={"x"} />
        <MobileKey keyValue={"c"} />
        <MobileKey keyValue={"v"} />
        <MobileKey keyValue={"b"} />
        <MobileKey keyValue={"n"} />
        <MobileKey keyValue={"m"} />
        <MobileFunctionKey keyValue="backSpace" />
      </div>
      <div className="mobile-keyboard-row">
        <div className="mobile-keyboard-row-align">
          <MobileKey keyValue={"-"} />
          <MobileKey keyValue={" "} />
          {/* <MobileFunctionKey keyValue="spaceBar" /> */}
          {/* <MobileKey keyValue={">>>"} keyFunction="enter" /> */}
          <MobileFunctionKey keyValue="enter" />
        </div>
      </div>
    </div>
  )
}

export default MobileKeyboard
