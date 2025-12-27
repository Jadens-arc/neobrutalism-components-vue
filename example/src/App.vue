<script setup>
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter,
  Input,
  Label,
  Alert,
  AlertTitle,
  AlertDescription,
  Badge,
  Checkbox,
  Switch,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  S1,
  S2,
  S3
} from 'neobrutalism-components-vue'
import { ref } from 'vue'
import { Bell, Heart, Star } from 'lucide-vue-next'

const isChecked = ref(false)
const isSwitchOn = ref(false)
const inputValue = ref('')
</script>

<template>
  <div class="min-h-screen bg-background p-8">
    <div class="max-w-6xl mx-auto space-y-8">
      <!-- Header -->
      <div class="text-center space-y-4">
        <h1 class="text-5xl font-heading">Neobrutalism Components Vue</h1>
        <p class="text-xl text-foreground/80">Testing the component library</p>
      </div>

      <!-- Stars Section -->
      <Card>
        <CardHeader>
          <CardTitle>Star Components</CardTitle>
          <CardDescription>Decorative star components for your UI</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex gap-4 items-center justify-center p-8">
            <S1 />
            <S2 />
            <S3 />
          </div>
        </CardContent>
      </Card>

      <!-- Buttons -->
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Different button variants and states</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="neutral">Neutral Button</Button>
          <Button variant="reverse">Reverse Button</Button>
          <Button variant="noShadow">No Shadow</Button>
          <Button>
            <Heart class="mr-2 size-4" />
            With Icon
          </Button>
        </CardContent>
      </Card>

      <!-- Form Elements -->
      <Card>
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>Inputs, labels, checkboxes, and switches</CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email"
              v-model="inputValue"
            />
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <Checkbox id="terms" v-model:checked="isChecked" />
              <Label for="terms">Accept terms and conditions</Label>
            </div>

            <div class="flex items-center space-x-2">
              <Switch id="notifications" v-model:checked="isSwitchOn" />
              <Label for="notifications">Enable notifications</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Alerts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Alert>
          <Bell class="size-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            This is a default alert message.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <Star class="size-4" />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>
            Something went wrong with your request.
          </AlertDescription>
        </Alert>
      </div>

      <!-- Badges -->
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Different badge styles</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="invert">Invert</Badge>
        </CardContent>
      </Card>

      <!-- Tabs -->
      <Card>
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
          <CardDescription>Tabbed content navigation</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs default-value="account" class="w-full">
            <TabsList class="grid w-full grid-cols-3">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account" class="space-y-4">
              <p>Manage your account settings and preferences here.</p>
            </TabsContent>
            <TabsContent value="password" class="space-y-4">
              <p>Change your password and security settings.</p>
            </TabsContent>
            <TabsContent value="settings" class="space-y-4">
              <p>Configure your application settings.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <!-- Complex Card Example -->
      <Card>
        <CardHeader>
          <CardTitle>Newsletter Signup</CardTitle>
          <CardDescription>Get the latest updates delivered to your inbox</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <Label for="newsletter-email">Email address</Label>
            <Input 
              id="newsletter-email" 
              type="email" 
              placeholder="you@example.com"
            />
          </div>
          <div class="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label for="marketing" class="text-sm">
              I agree to receive marketing emails
            </Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full">Subscribe</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
