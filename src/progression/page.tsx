import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { ArrowRight, ArrowDown, Code, Trophy, AlertCircle, CheckCircle, X, Clock } from "lucide-react"

export default function ProgressionPage() {
  const [selectedTab, setSelectedTab] = useState("levelup")

  return (
    <p> Progression </p>
  )
}
